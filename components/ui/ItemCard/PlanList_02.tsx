import PlanCard from "./PlanCard_02"

const PlanList_02 = () => {
  return (
    <div className="">
      <div className="overflow-x-scroll md:overflow-y-auto">
        <div
          className="grid gap-x-4 min-w-[1200px]"
          style={{ gridTemplateColumns: "160px 1fr 1fr 1fr" }}
        >
          <PlanCard title="" features={["小学生", "中１生", "中３生"]} />
          <PlanCard
            title="ドリーム・チーム"
            features={["¥4,510", "¥5,280", "¥5,720"]}
            isAccent={true}
          />
          <PlanCard title="H社" features={["¥8,200", "¥8,200", "¥8,200"]} />
          <PlanCard title="F社" features={["¥0,000", "¥0,000", "¥0,000"]} />
        </div>
      </div>
      <ul className="mt-6 text-xs gap-y-2 text-right">
        <li className="mb-2">※ MBA 調べ</li>
      </ul>
    </div>
  )
}

export default PlanList_02
