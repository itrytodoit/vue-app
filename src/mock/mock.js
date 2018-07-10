var Mock = require('mockjs')

Mock.mock('/api/login',
    {
        "resultCode":"200",
        "resultMessage":"success"
})