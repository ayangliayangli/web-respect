function highExpenseCompute(n = 1000000000) {
  const startTime = new Date().getTime();
  for (let i = 0; i < n; i++) {}
  const endTime = new Date().getTime();
  const duration = endTime - startTime;
  return duration;
}

addEventListener('message', (e) => {
  const t1 = highExpenseCompute(e.data.payload);

  console.log(`worker 计算成功 duration: ${t1}`);
  postMessage({
    type: 'computeRet',
    payload: t1,
  });
});
