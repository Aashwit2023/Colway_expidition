const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("Welecome to the Landing page using Controllers.");
    } catch (error) {
        console.log(error);
    }
};
const login = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({Message : req.body});
    } catch (error) {
        res.status(500).json("internal server error");
    }
    //     res
    //         .status(200)
    //         .send("Welcome to Login page.");
    // } catch (error) {
    //     res.status(400).send({msg: "Page not Found"})
    //     console.log(error);
    // }
};

module.exports = {home, login};