import axios from 'axios';

export function axiosPost(url = "#", payload) {
  return axios.post(url, {
    payload
  });
}

export function axiosGet() {

}

// inceptor
