/** Validate a generic integration envelope; no vendor-specific endpoint. */
export function validarEnvelope(e) {
  if (!e || e.versao!==1 || typeof e.id!=='string' || !e.id.trim() || typeof e.tipo!=='string' || !e.tipo.trim() || !e.dados || typeof e.dados!=='object' || Array.isArray(e.dados)) throw new TypeError('Invalid envelope');
  return structuredClone(e);
}
/** In-memory process-local deduplication, bounded and explicitly not durable. */
export function criarExecutor({executar, capacidade=1000} = {}) {
  if (typeof executar!=='function' || !Number.isSafeInteger(capacidade) || capacidade<1) throw new TypeError('Invalid executor options');
  const registros = new Map();
  return async (entrada) => {
    const e=validarEnvelope(entrada);
    const vistos = new Set();
    const canonical = (x) => {
      if (x===null || typeof x!=='object') {const v=JSON.stringify(x);if(v===undefined || typeof x==='number'&&!Number.isFinite(x)) throw new TypeError('JSON value required');return v;}
      if (vistos.has(x)) throw new TypeError('Cyclic payload');
      if (!Array.isArray(x) && Object.getPrototypeOf(x)!==Object.prototype && Object.getPrototypeOf(x)!==null) throw new TypeError('Plain JSON object required');
      vistos.add(x);
      const out = Array.isArray(x)?'['+x.map(canonical).join(',')+']':'{'+Object.keys(x).sort().map(k=>JSON.stringify(k)+':'+canonical(x[k])).join(',')+'}';
      vistos.delete(x); return out;
    };
    const assinatura=canonical(e);
    if (registros.has(e.id)) {
      const r=registros.get(e.id);
      if (r.assinatura!==assinatura) throw new Error('Idempotency key reused with different content');
      return structuredClone(await r.promise);
    }
    if (registros.size>=capacidade) throw new RangeError('Capacity reached; use a durable adapter for production');
    const r={assinatura,promise:null};
    r.promise=Promise.resolve().then(()=>executar(e)).then(x=>structuredClone(x));
    registros.set(e.id,r);
    try {return structuredClone(await r.promise);} catch(err) {registros.delete(e.id);throw err;}
  };
}
