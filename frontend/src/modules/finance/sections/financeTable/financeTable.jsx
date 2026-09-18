import "./financeTable.css";
import Search from "../../../../components/search/search";
import ListButton from "../../../../components/listButton/listButton";
import Table from "../../../../components/table/table";
export default function FinanceTable() {
  const columns = [
    { name: "name", label: "الاسم" },
    { name: "fathar", label: "الاب" },
    { name: "s_name", label: "العائلة" },
    { name: "amount", label: "الكمية" },
    { name: "date", label: "التاريخ" },
    { name: "note", label: "ملاحظة" },
  ];
  const data = [
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
    {
      name: "يحيى",
      fathar: "محمد",
      s_name: "الحمود",
      amount: "120$",
      date: "2026/9/18",
      note: "دفعة من اجل معالجة ",
    },
  ];
  return (
    <div className="financeTable">
      <section className="section-1">
        <div className="financeTable-buts">
          <ListButton label={"الديون"} />
          <ListButton label={"الدفعات"} />
        </div>
        <Search />
      </section>
      <Table data={data} columns={columns} w={"95%"} />
    </div>
  );
}
