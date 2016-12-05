let r = 10;

function timeout (pause) {
  return new Promise((success)=> {
    setTimeout(()=> {
      success(pause);
    }, pause)
  })
}


async function deni () {
  let u = await timeout(333);

  console.log(u);
}


deni();