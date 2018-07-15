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

Mock.mock(/.*\/flowserver\/service\/queryApprovalList.*/, {
  'resultCode': '200',
  'resultMessage': '成功',
  'retNum': 2,
  'data': [{
    'bill_type': 'PersonLoanRules',
    'bill_code': 'JK2018062600000002',
    'initiator': '杨勇',
    'description': '杨勇发起[ 借款测试—差旅 ]的申请',
    'workflow_code': '0000013580'
  },
    {
      'bill_type': 'PersonLoanRules',
      'bill_code': 'JK2018062600000002',
      'initiator': '杨勇2',
      'description': '杨勇2发起[ 借款测试—差旅 ]的申请',
      'workflow_code': '0000013581'
    }
  ]
})

Mock.mock(apiConfig.API_SHOW_BILL, {
  'resultCode': '200',
  'resultMessage': '成功',
  'bill_name': '0000013580',
  'bill_code': 'JK2018062600000002',
  'bill_type': 'PersonLoanRules',
  'approve_state': '待审批',
  'checkin_man': '杨勇',
  'approve_date': '2018-09-09',
  'apply_date': '2018-09-09',
  'request_fee': '505.00',
  'bill_approve': '505.00',
  'approve_man': '杨勇',
  'bill_dept': '部门',
  'request_man': ''
})

Mock.mock(apiConfig.API_SHOW_BILL_DET, {
  'resultCode': '200',
  'resultMessage': '成功',
  'data': [
    {
      'bill_code': 'JK2018062600000002',
      'line_id': 'AB1234567',
      'plan_id': '23678',
      'feetype_id': '这是一个很长的费用类型',
      'asset_name': '这是一个很长的费用名称',
      'fee_use': '这是一个很长的费用用途',
      'request_fee': '2000000',
      'approve_sum': '2000',
      'remark': '这是一个很长的备注'
    },
    {
      'bill_code': 'JK2018062600000002',
      'line_id': 'AB1234567',
      'plan_id': '23678',
      'feetype_id': 'ABCD',
      'asset_name': '住宿费',
      'fee_use': '住宿',
      'request_fee': '2000',
      'approve_sum': '2000',
      'remark': '如家'
    },
    {
      'bill_code': 'JK2018062600000002',
      'line_id': 'AB1234567',
      'plan_id': '23678',
      'feetype_id': 'ABCD',
      'asset_name': '住宿费',
      'fee_use': '住宿',
      'request_fee': '2000',
      'approve_sum': '2000',
      'remark': '如家'
    }
  ]
})

Mock.mock(apiConfig.API_QUERY_CHANGE_USER_LIST, {
  'resultCode': '200',
  'resultMessage': '成功',
  'data': [
    {
      'user_code': '12345',
      'username': 'zhangsan'
    },
    {
      'user_code': '54321',
      'username': 'lisi'
    }
  ]
})

Mock.mock(apiConfig.API_COMMIT_APPROVAL, {
  'resultCode': '200',
  'resultMessage': '成功'
})
