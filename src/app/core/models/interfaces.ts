export interface IHeaderOptions {
  isActive: boolean
  href?: string
}

export interface IOrder {
  id: number
  name: string
  statusText: string
  status: boolean
  leftTime: string
}
