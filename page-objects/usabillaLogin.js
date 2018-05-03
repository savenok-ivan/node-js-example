module.exports = {
    elements: {
        login: by.css('#username'),
        password: by.css('#password'),
        submit: by.css('.bttn')
    },

    signIn: function (login, password) {
        driver.findElement(page.usabillaLogin.elements.login).sendKeys(login);
        driver.findElement(page.usabillaLogin.elements.password).sendKeys(password);
        driver.findElement(page.usabillaLogin.elements.submit).click();
    }
};
