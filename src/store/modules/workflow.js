import axios from 'axios'
import * as apiConfig from '../../config/api'

const state = {
  workflowCode: '',
  approvalList: [],
  bill: {},
  billDet: []
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
  }
}

const actions = {
  queryApprovalList(context, options) {
    console.log(apiConfig.API_QUERY_APPROVAL_LIST)
    axios({
      method: 'post',
      url: apiConfig.API_QUERY_APPROVAL_LIST,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === '200') {
        let approvalList = res.data.data
        context.commit('updateApprovalList', approvalList)
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
      })
  },
  showBill(context, options) {
    console.log(apiConfig.API_SHOW_BILL)
    axios({
      method: 'post',
      url: apiConfig.API_SHOW_BILL,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === '200') {
        let bill = res.data
        context.commit('updateBill', bill)
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
      })
  },
  showBillDet(context, options) {
    console.log(apiConfig.API_SHOW_BILL_DET)
    axios({
      method: 'post',
      url: apiConfig.API_SHOW_BILL_DET,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === '200') {
        let billDet = res.data.data
        context.commit('updateBillDet', billDet)
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
      })
  },
  approve(context, options) {
    console.log(apiConfig.API_SHOW_BILL_DET)
    axios({
      method: 'post',
      url: apiConfig.API_SHOW_BILL_DET,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === '200') {
        let billDet = res.data.data
        context.commit('updateBillDet', billDet)
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
  }
}

export default {
  state,
  getters,
  actions,
mutations}
