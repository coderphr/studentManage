import {request} from './request';

export function getStudents() {
  return request({
    url:'/student'
  })
}

export function getStudent(index) {
  return request({
    url:'/edit',
    params:{
      index
    }
  })
}