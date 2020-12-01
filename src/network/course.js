import {request} from './request';

export function getCourse() {
  return request({
    url:'/course'
  })
}