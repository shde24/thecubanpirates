let fileInputElement1;
let file1contents;
let file2contents;

function init() {
    fileInputElement1 = document.getElementById("fileInput1");
    
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}


function readFile1() {
    if(document.getElementById("fileInput1").value == "") {
        document.getElementById("fileContent1").innerHTML = "";
        return;
    }
    const selectedFile = document.getElementById('fileInput1').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        
        document.getElementById("fileContent1").innerHTML = event.target.result;
        
    });
    reader.readAsText(selectedFile);
}

function turnFile1IntoJSON() {
    file1contents = JSON.parse(document.getElementById("fileContent1").innerHTML);
    console.log(file1contents)
}


function readFile2() {
    if(document.getElementById("fileInput2").value == "") {
        document.getElementById("fileContent2").innerHTML = "";
        return;
    }
    const selectedFile = document.getElementById('fileInput2').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        document.getElementById("fileContent2").innerHTML = event.target.result;
        
    });
    reader.readAsText(selectedFile);
}

function turnFile2IntoJSON() {
    file2contents = JSON.parse(document.getElementById("fileContent2").innerHTML);
    console.log(file2contents)
}

function combineMaps() {
    const errorBoxElement = document.getElementById("error-box")
    errorBoxElement.innerHTML = "";
    if(document.getElementById("fileInput1").value == "" || document.getElementById("fileInput2").value == "") {
        errorBoxElement.innerHTML += "Please upload difficulties in both file slots.\n"
        return;
    }
    turnFile1IntoJSON();
    turnFile2IntoJSON();
    
    // If both difficulties do not have the same version (v3)
    if(file1contents.version != file2contents.version) {
        if(file1contents.version && !file2contents.version) {
            errorBoxElement.innerHTML += "Beatmap versions do not match! File #1: " + file1contents.version + ", File #2: " + file2contents._version + "\n";
            return;
        }
        else if(!file1contents.version && file2contents.version) {
            errorBoxElement.innerHTML += "Beatmap versions do not match! File #1: " + file1contents._version + ", File #2: " + file2contents.version + "\n";
            return;
        }
    }
    // If both difficulties DO have the same version (v3)
    else if(file1contents.version != undefined && file2contents.version != undefined) {
        if(file1contents.version == file2contents.version) {
            // Copy bpmEvents from file 1 to file 2
            if(document.getElementById("bpmEventsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.bpmEvents.length; i++) {
                    file2contents.bpmEvents.push(file1contents.bpmEvents[i]);
                }
                console.log("bpmEvents combined!")
            }
            // Copy rotationEvents from file 1 to file 2
            if(document.getElementById("rotationEventsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.rotationEvents.length; i++) {
                    file2contents.rotationEvents.push(file1contents.rotationEvents[i]);
                }
                console.log("rotationEvents combined!")
            }
            // Copy colorNotes from file 1 to file 2
            if(document.getElementById("colorNotesCheckbox").checked == true) {
                for (let i = 0; i < file1contents.colorNotes.length; i++) {
                    file2contents.colorNotes.push(file1contents.colorNotes[i]);
                }
                console.log("colorNotes combined!")
            }
            // Copy bombNotes from file 1 to file 2
            if(document.getElementById("bombNotesCheckbox").checked == true) {
                for (let i = 0; i < file1contents.bombNotes.length; i++) {
                    file2contents.bombNotes.push(file1contents.bombNotes[i]);
                }
                console.log("bombNotes combined!")
            }
            // Copy obstacles from file 1 to file 2
            if(document.getElementById("obstaclesCheckbox").checked == true) {
                for (let i = 0; i < file1contents.obstacles.length; i++) {
                    file2contents.obstacles.push(file1contents.obstacles[i]);
                }
                console.log("obstacles combined!")
            }
            // Copy sliders from file 1 to file 2
            if(document.getElementById("slidersCheckbox").checked == true) {
                for (let i = 0; i < file1contents.sliders.length; i++) {
                    file2contents.sliders.push(file1contents.sliders[i]);
                }
                console.log("sliders combined!")
            }
            // Copy burstSliders from file 1 to file 2
            if(document.getElementById("burstSlidersCheckbox").checked == true) {
                for (let i = 0; i < file1contents.burstSliders.length; i++) {
                    file2contents.burstSliders.push(file1contents.burstSliders[i]);
                }
                console.log("burstSliders combined!")
            }
            // Copy waypoints from file 1 to file 2
            if(document.getElementById("waypointsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.waypoints.length; i++) {
                    file2contents.waypoints.push(file1contents.waypoints[i]);
                }
                console.log("waypoints combined!")
            }
            // Copy basicBeatmapEvents from file 1 to file 2
            if(document.getElementById("basicBeatmapEventsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.basicBeatmapEvents.length; i++) {
                    file2contents.basicBeatmapEvents.push(file1contents.basicBeatmapEvents[i]);
                }
                console.log("basicBeatmapEvents combined!")
            }
            // Copy colorBoostBeatmapEvents from file 1 to file 2
            if(document.getElementById("colorBoostBeatmapEventsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.colorBoostBeatmapEvents.length; i++) {
                    file2contents.colorBoostBeatmapEvents.push(file1contents.colorBoostBeatmapEvents[i]);
                }
                console.log("colorBoostBeatmapEvents combined!")
            }
            // Copy lightColorEventBoxGroups from file 1 to file 2
            if(document.getElementById("lightColorEventBoxGroupsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.lightColorEventBoxGroups.length; i++) {
                    file2contents.lightColorEventBoxGroups.push(file1contents.lightColorEventBoxGroups[i]);
                }
                console.log("lightColorEventBoxGroups combined!")
            }
            // Copy lightRotationEventBoxGroups from file 1 to file 2
            if(document.getElementById("lightRotationEventBoxGroupsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.lightRotationEventBoxGroups.length; i++) {
                    file2contents.lightRotationEventBoxGroups.push(file1contents.lightRotationEventBoxGroups[i]);
                }
                console.log("lightRotationEventBoxGroups combined!")
            }
            // Copy basicEventTypesWithKeywords from file 1 to file 2
            if(document.getElementById("basicEventTypesWithKeywordsCheckbox").checked == true) {
                for (let i = 0; i < file1contents.basicEventTypesWithKeywords.length; i++) {
                    file2contents.basicEventTypesWithKeywords.push(file1contents.basicEventTypesWithKeywords[i]);
                }
                console.log("basicEventTypesWithKeywords combined!")
            }
            // Override file 2's customData with file 1's customData
            if(document.getElementById("customDataCheckbox").checked == true) {
                let combinedCustomData = {
                    ...file1contents.customData,
                    ...file2contents.customData
                }
                file2contents['customData'] = combinedCustomData
                console.log("customData overridden!")
            }
            errorBoxElement.innerHTML += "Map combined! \n"

            // Generate downloadable file with new contents
            download(fileInput2.files.item(0).name, JSON.stringify(file2contents));
            document.getElementById("fileInput1").value = null
            document.getElementById("fileInput2").value = null
            document.getElementById("fileContent1").innerHTML = "";
            document.getElementById("fileContent2").innerHTML = "";
        }
    }

    // If both difficulties DO have the same version (v2)
    else if(file1contents._version == file2contents._version) {
        // Override file 2's _customData with file 1's _customData
        if(document.getElementById("_customDataCheckbox").checked == true) {
            let combinedCustomData = {
                ...file1contents._customData,
                ...file2contents._customData
            }
            file2contents['_customData'] = combinedCustomData
            console.log("_customData overidden!")
        }
        // Copy _events from file 1 to file 2
        if(document.getElementById("_eventsCheckbox").checked == true) {
            for (let i = 0; i < file1contents._events.length; i++) {
                file2contents._events.push(file1contents._events[i]);
            }
            console.log("_events combined!")
        }
        // Copy _notes from file 1 to file 2
        if(document.getElementById("_notesCheckbox").checked == true) {
            for (let i = 0; i < file1contents._notes.length; i++) {
                file2contents._notes.push(file1contents._notes[i]);
            }
            console.log("_notes combined!")
        }
        // Copy _obstacles from file 1 to file 2
        if(document.getElementById("_obstaclesCheckbox").checked == true) {
            for (let i = 0; i < file1contents._obstacles.length; i++) {
                file2contents._obstacles.push(file1contents._obstacles[i]);
            }
            console.log("_obstacles combined!")
        }
        // Copy _waypoints from file 1 to file 2
        if(document.getElementById("_waypointsCheckbox").checked == true) {
            for (let i = 0; i < file1contents._waypoints.length; i++) {
                file2contents._waypoints.push(file1contents._waypoints[i]);
            }
            console.log("_waypoints combined!")
        }
        download(fileInput2.files.item(0).name, JSON.stringify(file2contents));
        document.getElementById("fileInput1").value = null
        document.getElementById("fileInput2").value = null
        document.getElementById("fileContent1").innerHTML = "";
        document.getElementById("fileContent2").innerHTML = "";
    }

    // If both difficulties do not have the same version (v2)
    else {
        errorBoxElement.innerHTML += "Could not combine map :(\n"
        return;
    }
}