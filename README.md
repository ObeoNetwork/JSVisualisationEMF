# Data visualisation for EMF models

In this subject, the students will have to evaluate the proper data visualization for EMF models. Nowadays, there are countless of data visualization frameworks from d3.js [1] to sigma.js [2] or even two.js [3] and three.js [4]. The candidates will have to investigate the state of the art in data visualization in order to experiment the best data visualization approach for EMF models. It will also be necessary to find out how those visualization can be linked to the graph of model elements created by EMF. Some data visualization strategy may require a small binding strategy like in Excel when you want to connect a chart to some data in a table. You will have to keep in mind that in industrial use cases, EMF models can be composed of hundreds of resources with hundred thousands of model elements.
To implement this projects, the student should start by exposing as a HTTP + Json API some data from EMF models using Java servlets and then use JavaScript frameworks for the data-visualization.
Students will need to determine what kind of information should be exposed as a HTTP API depending on the kind of visualization supported.

1: https://d3js.org/ 
2: http://sigmajs.org/
3: https://two.js.org/ 
4: https://threejs.org/ 


## Setup of dev tools

### 1. Node.js version manager 

For windows users : https://github.com/marcelklehr/nodist/releases

For Linux users : https://github.com/nodenv/nodenv#installation

For Mac users : https://github.com/nodenv/nodenv#homebrew-on-mac-os-x

### 2. Install of the last LTS version of node.js
On terminal (PowerShell on windows)
```
nodist + 8.9.4
```

### 3. Vue-cli
On terminal (PowerShell on windows)
```
npm install -g vue-cli
```

### 4. On the web-app folder
On terminal (PowerShell on windows)
```
npm install
```

## To run app 
On terminal (PowerShell on windows)
```
npm run dev # on web-app folder
```
App is available on url http://localhost:8080
