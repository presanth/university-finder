function find(){
    uname = uname.value
    cname = cname.value

    if(uname || cname){
        fetch(`http://universities.hipolabs.com/search?name=${uname}&country=${cname}`).then(data=>data.json())
        .then(datas=>dispalyValue(datas))
    }else{
        alert('field empty')
    }


}

function dispalyValue(values){

    let l = values.length
    console.log(l);
    for(i=0;i<=l;i++){
        univeristy = values[i].name
        sta = values[i]["state-province"]
        country = values[i].country
        web = values[i].web_pages

        mainoutput.innerHTML += `<div id="outputbox">
                                    <div class="uimg">
                                        <img src="./img/university-logo-design_1970415.jpg" alt="">
                                    </div>
                                    <div id="udetails">
                                        <h3>${univeristy}</h3>
                                        <h4>${sta},${country}</h4>
                                        <h5>WEBSITE:<a href="${web}">${web}</a></h5>
                                    </div>
                                </div>`
    }
}