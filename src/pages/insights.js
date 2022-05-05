import getData from "../utils/getData";

const Insights = async () => {
    await getData('insights')
    return `
    <h1>Get Mixpanel Data for an Insight ID</h1>
    <div>
        <label for="query_id" class="form-label">Insight ID</label>
        <input type="text" class="form-control" id="query_id" />
        <div id="errorMsg" class="text-danger"></div>
    </div>
    `
}

export default Insights