import * as apiConfig from '../config/api'
var Mock = require('mockjs')

Mock.mock(apiConfig.API_LOGIN, {
  'resultCode': '200',
  'resultMessage': 'success'
})

Mock.mock(apiConfig.API_UPDATE_PASSWORD, {
  'resultCode': '200',
  'resultMessage': 'success'
})
