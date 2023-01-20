import axios from 'axios'
import Constans from 'expo-constants'

export const api = axios.create({
  baseURL: Constans.expoConfig?.extra?.baseURL
})
