const rp = require('request-promise')

// 公共变量
const serverJ = process.env.PUSH_KEY

async function sendNotify (text,desp) {
  const options ={
    uri:  `https://sc.ftqq.com/${serverJ}.send`,
    form: { text, desp },
    json: true,
    method: 'POST'
  }
  await rp.post(options).then(res=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}


async function start() {
  if (serverJ) {
        await sendNotify("你好");
  }
}

start()
