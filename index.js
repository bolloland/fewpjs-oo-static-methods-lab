class Formatter {
    static capitalize(name) {
        return name[0].toUpperCase() + name.substring(1)
    }
    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-' ]+/g, '')
    }
    static titleize(string) {
        let titleArray = []
        let words = string.split(" ")
        console.log(words)
        titleArray.push( this.capitalize(words[0]))
        let last = words.slice(1)
        for (let i = 0; i < last.length; i++) {
            if (last[i] == "the" || last[i] == "a" || last[i] == "an" || last[i] == "but" || last[i] == "of" || last[i] == "and" || last[i] == "for" || last[i] == "at" || last[i] == "by" || last[i] == "from") {
                titleArray.push(last[i])
            } else {
                titleArray.push(this.capitalize(last[i]))
            }
            }
            // word[0].toUpperCase() + word.substring(1)
          
            return titleArray.join(" ")
            console.log(titleArray)
    }   
    
}