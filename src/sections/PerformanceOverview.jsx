import PerformanceStats from "../graphs/PerformanceStats"

const PerformanceOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold uppercase my-2 mx-3">Performance Overview</h1>
      <hr className="bg-black my-4" />
      <PerformanceStats/>
    </div>
  )
}

export default PerformanceOverview
