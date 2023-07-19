import type { Request } from 'express'

export type BodyRequest<T> = Omit<Request, 'body'> & { body: T }
