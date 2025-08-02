class Colors{

static colorPalette = {
        'white1':        '#fefefe',
        'white2':        '#f9f9f9',
        'white3':        '#eaeaea',
        'gray1':         '#d5d5d5',
        'gray2':         '#bfbfbf',
        'gray3':         '#a5a5a5',
        'gray4':         '#8c8c8c',
        'gray5':         '#6e6e6e',
        'gray6':         '#4f4f4f',
        'gray7':         '#2f2f2f',
        'gray8':         '#1f1f1f',
        'red1':          '#f57777',
        'red2':          '#e92b2b',
        'red2':          '#b11b1b',
        'orange1':       '#FDBA74',
        'orange2':       '#F97316',
        'orange3':       '#C2410C',
        'amber1':        '#FDE68A',
        'amber2':        '#F59E0B',
        'amber3':        '#B45309',
        'green1':        '#46e135',
        'green2':        '#1eb910',
        'green3':        '#0a7804',
        'blue1':         '#93C5FD',
        'blue2':         '#3B82F6',
        'blue3':         '#1E40AF',
        'purple1':       '#C4B5FD',
        'purple2':       '#8B5CF6',
        'purple3':       '#5B21B6',
        'pink1':         '#F9A8D4',
        'pink2':         '#EC4899',
        'pink3':         '#9D174D',
        'teal1':         '#5EEAD4',
        'teal2':         '#14B8A6',
        'teal3':         '#0F766E',
        'lime1':         '#D9F99D',
        'lime2':         '#84CC16',
        'lime3':         '#4D7C0F',
        'sky1':          '#BAE6FD',
        'sky2':          '#38BDF8',
        'sky3':          '#0369A1',
        'indigo1':       '#A5B4FC',
        'indigo2':       '#6366F1',
        'indigo3':       '#3730A3',
        'cyan1':         '#A5F3FC',
        'cyan2':         '#06B6D4',
        'cyan3':         '#0E7490',
        'emerald1':      '#A7F3D0',
        'emerald2':      '#10B981',
        'emerald3':      '#065F46',
    };

    constructor(colorPalette){
        if(colorPalette!= null && colorPalette != undefined){
            this.colorPalette = colorPalette;
        }
    }

    static getColorPalette(){
        return this.colorPalette;
    }

    static getColorPaletteList(){
        return Object.keys(this.colorPalette);
    }

    static getColor(key){
        return this.colorPalette[key] || null;
    }

    static getColorAlpha(key,alpha){
        return this.colorPalette[key] + alpha || null;
    }

    static populateSelectWithKeys(select){
    let list = this.getColorPaletteList();
    list.forEach(colorKey => {
        let option = document.createElement('option');
        option.value = colorKey;
        option.textContent = colorKey;
        select.appendChild(option);
    });
}
}