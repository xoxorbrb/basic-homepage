const app = require("../../app");


const PORT = process.env.PORT || 3000;


app.listen(PORT , () => {
    console.log(`${PORT} 포트에서 서버 실행되었습니다.`);
})