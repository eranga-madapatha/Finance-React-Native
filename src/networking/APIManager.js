import * as Constants from '../common/Constants';

export const request = (endPoint, requestType, body) =>
  new Promise(async (resolve, reject) => {
    fetch(Constants.BASE_API + endPoint, {
      method: requestType,
      headers: {
        // Authorization: 'qsskX8b4k0ccsks8oc8cc00oc0o4g0sookc880k8x',
        // "Content-Type": "application/json",
      },
      body: body,
    })
      .then(response => {
        response
          .json()
          .then(json => {
            if (response.ok) {
              console.log('success in API manager ', json);
              resolve(json);
            } else {
              // } else if (response.status === 404) {
              console.log('error in API manager ', json.status, json.message);
              reject(json.status);
              // Alert.alert('Not Found');
            }
          })
          .catch(error => {
            reject(error);
            console.log(error);
            console.log(
              'error in API manager catch ',
              response.status,
              error.description,
            );
          });
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
