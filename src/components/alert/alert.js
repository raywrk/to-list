
export const alert = (p, background, backgrounTimeBar) => { 
    return `
        <div class="alert" style="background: ${background};">
        <p>${p}</p>

            <div class="timeBar" style="background: ${backgrounTimeBar};" ></div>
        </div>

`
}

















