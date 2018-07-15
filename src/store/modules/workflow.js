import axios from 'axios'
import * as apiConfig from '../../config/api'

const state = {
  workflowCode: '',
  approvalList: [],
  bill: {},
  billDet: [],
  transferList: []
}

const getters = {
  workflowCode: state => {
    return state.workflowCode
  },
  approvalList: state => {
    return state.approvalList
  },
  bill: state => {
    return state.bill
  },
  billDet: state => {
    return state.billDet
  },
  transferList: state => {
    return state.transferList
  }
}

const actions = {
  queryApprovalList(context, options) {
    console.log(apiConfig.API_QUERY_APPROVAL_LIST)
    axios({
      method: 'GET',
      url: apiConfig.API_QUERY_APPROVAL_LIST,
      params: options.data
    }).then(function (res) {
      options.successCallback(res)
    })
      .catch(function (err) {
        options.errorCallback(err)
      })
  },
  showBill(context, options) {
    console.log(apiConfig.API_SHOW_BILL)
    axios({
      method: 'post',
      url: apiConfig.API_SHOW_BILL,
      data: options.data
    }).then(function (res) {
      options.successCallback(res)
    })
      .catch(function (err) {
        options.errorCallback(err)
      })
  },
  showBillDet(context, options) {
    console.log(apiConfig.API_SHOW_BILL_DET)
    axios({
      method: 'post',
      url: apiConfig.API_SHOW_BILL_DET,
      data: options.data
    }).then(function (res) {
      options.successCallback(res)
    })
      .catch(function (err) {
        options.errorCallback(err)
      })
  },
  transferList(context, options) {
    console.log(apiConfig.API_QUERY_CHANGE_USER_LIST)
    axios({
      method: 'post',
      url: apiConfig.API_QUERY_CHANGE_USER_LIST,
      data: options.data
    }).then(function (res) {
      options.successCallback(res)
    })
      .catch(function (err) {
        options.errorCallback(err)
      })
  },
  commitApproval(context, options) {
    console.log(apiConfig.API_COMMIT_APPROVAL)
    axios({
      method: 'post',
      url: apiConfig.API_COMMIT_APPROVAL,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === '200') {
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
      })
  }
}

const mutations = {
  updateWorkflowCode(state, workflowCode) {
    state.workflowCode = workflowCode
  },
  updateApprovalList(state, approvalList) {
    state.approvalList = approvalList
  },
  updateBill(state, bill) {
    state.bill = bill
  },
  updateBillDet(state, billDet) {
    state.billDet = billDet
  },
  updateTransferList(state, transferList) {
    state.transferList = transferList
  }
}

export default {
  state,
  getters,
  actions,
mutations}
