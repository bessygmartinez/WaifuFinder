let waifus = require("../data/waifus.js");

module.exports = function (app) {
    //Get waifus.js and return as JSON
    app.get("/api/waifus", function (req, res) {
        res.json(waifus);
    });

    app.post("/api/waifus", function (req, res) {
        console.log(req.body.scores);

        //Store user info into a variable
        let user = req.body;

        //make all scores from user integers (no negatives)
        user.scores.forEach(score => {
            parseInt(score);
        });


        //default waifu will be the first match, but the result will be whoever has the least difference in scores
        let waifuIndex = 0;
        let minDiff = 40;

        //Start with a zero difference and then compare the user scores against the waifus, one at a time
        //Whatever the difference is will be added to the total difference
        for (let i = 0; i < waifus.length; i++) {
            let totalDiff = 0;
            for (let j = 0; j < waifus[i].scores.length; j++) {
                let diff = Math.abs(user.scores[j] - waifus[i].scores[j]);
                totalDiff += diff;
            };

            //if there's a new minimum, change the waifu index and set the new minimum for the next comparison
            if (totalDiff < minDiff) {
                waifuIndex = i;
                minDiff = totalDiff;
            };
        };

        //Once a match is found, push the user to the waifus array
        waifus.push(user);

        //send the match to the browser
        res.json(waifus[waifuIndex]);
    });
};