const output = {
    root: (req, res) => {
        res.render("home/root");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

module.exports = {
    output,
};