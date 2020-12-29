export default () => {
    return new Promise((resolve) => {
        window.navigator.geolocation.getCurrentPosition(
            (result) => {
                resolve({
                    lat: result.coords.latitude,
                    lon: result.coords.longitude,
                });
            },
            () => {
                resolve(null);
            },
        );
    });
};
