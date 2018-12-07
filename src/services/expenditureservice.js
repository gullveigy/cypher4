import Api from '@/services/api'

export default {
  fetchExpenditures () {
    return Api().get('/expenditures')
  },
  postExpenditure (expenditure) {
    return Api().post('/expenditures', expenditure,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteExpenditure (id) {
    return Api().delete(`/expenditures/${id}`)
  },
  fetchExpenditure (id) {
    return Api().get(`/expenditures/${id}`)
  },
  putExpenditure (id, expenditure) {
    console.log('REQUESTING ' + expenditure._id + ' ' +
      JSON.stringify(expenditure, null, 5))
    return Api().put(`/expenditures/${id}/changeExinfo`, expenditure,
      { headers: {'Content-type': 'application/json'} })
  }
}
