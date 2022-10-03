
import { saveRequestResponseLog } from '../../loggers/requestResponseLogger'
import { Routes } from '../../routes'

function main(target: any, key: string, descriptor: PropertyDescriptor, method: 'get' | 'post' | 'put' | 'delete', route: string) {

    Routes.push({
        method,
        route: route,
        controller: target.constructor,
        action: key
    })

    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {

        try {

            const result = originalMethod.apply(this, args)

            if (result && result instanceof Promise) {

                return result.then((result) => {

                    saveRequestResponseLog(route, 'info', method === 'post' ? args[0].body : args[0].params, result)
                    return result

                }).catch((error: any) => {

                    saveRequestResponseLog(route, 'error', method === 'post' ? args[0].body : args[0].params, error.message)
                    return error

                })

            }

        } catch (error: any) {

            saveRequestResponseLog(route, 'error', method === 'post' ? args[0].body : args[0].params, error.message)
            return error

        }

    }

    return descriptor

}

export function Get(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: PropertyDescriptor) {

        return main(target, key, descriptor, 'get', route)

    }

}

export function Post(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: any) {

        return main(target, key, descriptor, 'post', route)

    }

}

export function Delete(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: any) {

        return main(target, key, descriptor, 'delete', route)

    }

}
