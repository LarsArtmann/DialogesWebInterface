var optionKeys = [];

window.addEventListener("load", function () {
    let height = window.innerHeight*0.9;
    document.getElementById("editor").style.minHeight=height+"px";

    document.getElementById("addOptionButton").addEventListener("click", function () {
        addOption();
    });

    document.getElementById("exportButton").addEventListener("click", function () {
        let actions = {};

        optionKeys.forEach(function (id, index, array) {
            let key = document.getElementById("txVal-"+id).value;
            let value = document.getElementById("idVal-" + id).value;
            actions[key]=value;
        });

        let option = {
            "id": document.getElementById("dialogID").value,
            "text": document.getElementById("dialogText").value.split("||"),
            "actions": actions,
            "command": document.getElementById("dialogCommand").value
        };

        download(option.id+".json", JSON.stringify(option,null, 2))
    });

});

window.addEventListener("resize", function () {
    let height = window.innerHeight*0.9;
    document.getElementById("editor").style.minHeight=height+"px";
});

function addOption() {
    let div = document.createElement("div");
    let optionID = Math.random() + "";

    optionKeys.push(optionID);

    div.classList.add("upper","child-div","option","no-collide");
    div.setAttribute("id", optionID);

    document.getElementById("editor").appendChild(div);

    let id = document.createElement("input");
    id.setAttribute("id", "idVal-"+optionID);
    id.classList.add("optionInputId");
    let idLabel = document.createElement("label");
    idLabel.setAttribute("for","idVal-"+optionID);
    idLabel.setAttribute("id","idLabel-"+optionID);
    idLabel.innerHTML="ID";

    let text = document.createElement("input");
    text.setAttribute("id", "txVal-"+optionID);
    text.classList.add("optionInput");
    let textLabel = document.createElement("label");
    textLabel.setAttribute("for","txVal-"+optionID);
    textLabel.setAttribute("id","txLabel-"+optionID);
    textLabel.innerHTML="Text";


    document.getElementById(optionID).appendChild(idLabel);
    document.getElementById(optionID).appendChild(id);
    document.getElementById(optionID).appendChild(textLabel);
    document.getElementById(optionID).appendChild(text);
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}