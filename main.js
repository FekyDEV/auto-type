/**
* @name Auto-Type
* @description Automatic TYPE Detection for the Report BOT
* @author FekyDEV
* @authorId 603505971507101698
* @version 1.0.0
* @invite sKKEyUn
* @source https://github.com/FekyDEV/auto-type/
* @license MIT
*/


// NEW AUTO-TYPE DETECTION
let text_not_edited = "fix and user"
let text = text_not_edited.toLowerCase()

// IMPORTANT
let types = ["user", "issue"]
let user_types = ["user", "player", "person", "<@", "buyer", "client", "customer", "patron"]
let issue_types = ["bug", "fix", "lag", "issue", "problem"]

// STATS
let taken = false
let user_first = false
let issue_first = false

let user_stats = 0
let issue_stats = 0

// CODE
let split_text = text.split(" ")
let text_len = split_text.length

for (let i = 0; i < text_len; i++) {
    let current_word = split_text[i]

    for (let j = 0; j < 2; j++) {
        let actual_type = types[j]
        let actual_types = eval(`${actual_type}_types`)
        let types_len = actual_types.length

        for (let k = 0; k < types_len; k++) { //  _TYPES
            let search_for = actual_types[k]
                //console.log("Searching for: %s", search_for) // TOTAL SPAM xD
            let re = new RegExp(search_for, 'gi');

            if(current_word.match(re)) {
                let start = text.indexOf(search_for)
                let len = start + search_for.length
                let end = text_not_edited.slice(start, len);
                    let calculation_1 = text.indexOf(search_for)
                    let calculation_2 = calculation_1 + search_for.length
                        let before_shorted = text_not_edited.slice((calculation_1 - 1), calculation_2 - (calculation_2 - calculation_1)) ;
                        let after_shorted = text_not_edited.slice(calculation_2 , (calculation_2 + 1));
                            let before = text_not_edited.slice(0, calculation_2 - (calculation_2 - calculation_1));
                            let after = text_not_edited.slice(calculation_2 , text_not_edited.length);
                                //console.log(calculation_1 + " / " + calculation_2)
                                //console.log(before + " / " + after)
                console.log("Match: (%s) in '%s`%s`%s'", actual_type, before, end, after) // PRETTY

                if(actual_type == "user") {
                    user_stats = user_stats + 1

                    if(!taken) {
                        taken = true
                            user_first = true
                        user_stats = user_stats + 1
                    }

                    if(before_shorted == " ") {
                        before_shorted = ""
                    }

                    if(before_shorted.length == 0 ) {
                            user_stats = user_stats + 1
                    }
                    if(end == "<@") {
                        user_stats = user_stats + 1
                    }

                }  if(actual_type == "issue") {
                    issue_stats = issue_stats +1

                    if(!taken) {
                        taken = true
                            issue_first = true
                                issue_stats = issue_stats + 1
                    }
                    if(before_shorted == " ") {
                        before_shorted = ""
                    }
                    if(before_shorted.length == 0) {
                            issue_stats = issue_stats + 1
                    }
                }

            }
        }

    }

}
// OUT OF LOOP (STATS)
let total = user_stats + issue_stats
    let user_total = Math.round((user_stats/total)*100)
    let issue_total = Math.round((issue_stats/total)*100)

console.log("\nStats: \n - User: %s%\n - Issue: %s%", user_total, issue_total)
