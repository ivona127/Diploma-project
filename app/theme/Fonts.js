import metrics from "./Metrics"

const size = {
    font14: metrics.width * (14 / 365),
    font15: metrics.width * (15 / 365),
    font16: metrics.width * (16 / 365),
    font18: metrics.width * (18 / 365),
    font19: metrics.width * (19 / 365),
    font21: metrics.width * (21 / 365),
    font25: metrics.width * (25 / 365),    
    font35: metrics.width * (35 / 365),
    font38: metrics.width * (38 / 365)
}

const weight = {
    bold: 'bold',
    normal: 'normal'
}

const type = {
    roboto: 'Roboto'
}

export default {
    size,
    weight,
    type
}