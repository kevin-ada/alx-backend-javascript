# ES6-Promises
> Focuses on the perspective of how to use Asyc and await in JS

## Response Data format
```js
 export function uploadPhoto(){
    return Promise.resolve({
        status:200,
        body:'photo-profile-1'
        }
    )
}
```