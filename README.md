# mapping-translator
Translate OBDA mappings (R2RML/RML) into GraphQL Resolvers

## Running the mapping translator
1. ```git clone https://github.com/oeg-upm/mapping-translator```
2. ```cd mapping-translator```
3. ```npm install```
4. ```node app.js```

## Example 1: Translating RML mappings to GraphQL Resolvers for MongoDB and Python (Assuming that you have MongoDB, python and pip installed on your computer)
1. go to http://localhost:8082/transform
2. specify your rml mappings
3. click the "submit" button, hopefully a zip file containing all the necessary files will be generated
4. unzip that zip file and run the "startup.sh" script
5. Your graphql application is now ready at http://localhost:5000/graphql

## Example 2: with JavaScript and Sqlite (assuming that you have npm and node installed)
1. ```curl -X POST \```
```  http://mappingtranslator.mappingpedia.linkeddata.es/transform \```
```  -H 'Content-Type: application/json' \```
```  -d '{ "prog_lang": "javascript", ```
```"dataset_type":"sqlite", ```
```"mapping_url":"https://raw.githubusercontent.com/oeg-upm/mapping-translator/master/example/persona.rml.ttl",```
```"db_name":"personas.sqlite",```
```"mapping_language":"rml"```
```}' > output.zip```
2. ```unzip output.zip```
3. ```cd output```
4. ```npm install```
5. ```node app.js```

## Example (Person is mapped to collection Persona, name is mapped to field nombre)
- mapping: https://raw.githubusercontent.com/oeg-upm/mapping-translator/master/example/persona.rml.ttl

## To query all persons 
```
query { Person { name } }
```
## To add a person
```
mutation {
  createPerson(name: "Bob") {
    person {
      name
    }
  }
}
```

# Screenshot
![screenshot](https://github.com/oeg-upm/mapping-translator/raw/master/example/screenshot.png)

![screenshot-graphql](https://github.com/oeg-upm/mapping-translator/raw/master/example/screenshot-graphql.png)
