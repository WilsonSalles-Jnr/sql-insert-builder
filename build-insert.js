const fs = require('fs').promises;

const tableToSql = (table, path = "./table") => {
  const stringToData = (string) => {
    let name = ""
    for (let i = 0; i < string.length; i+= 1){
      if (i === 0) {name += '("'}
      if (string[i] === `\t`) {name += '", "'}
      if (string[i] !== "\t") {name += string[i] }
    }
    name += '")'
    return name
  }

  const splitter = table.split('\n');
  const stringFy = splitter.map((cur) => stringToData(cur));

  const send = async () => {
    for(let i = 0; i < stringFy.length; i += 1){
      await fs.appendFile(`${path}.sql`, stringFy[i])
      if(i === stringFy.length - 1) { await fs.appendFile(`${path}.sql`,';\n') }
      else { await fs.appendFile(`${path}.sql`,',\n') }
    }
  }

  return send()
}

module.exports = tableToSql;