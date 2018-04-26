module.exports = {
    elements: {
        login: by.name('_username'),
        password: by.name('_password'),
        submit: by.css('.bttn')
    },

    signIn: function () {
        var loginVal = shared["test-data"].username;
        var passwordVal = shared["test-data"].password;

        driver.findElement(page.usabillaLogin.elements.login).sendKeys(loginVal);
        driver.findElement(page.usabillaLogin.elements.password).sendKeys(passwordVal);
        driver.findElement(page.usabillaLogin.elements.submit).click();
    }
};