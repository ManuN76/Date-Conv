window.function = function (
  date,
  lang,
  weekday,
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeZoneName,
  era
) {
  if (date.value === undefined) return;

  let lg = "";
  if (lang === undefined || lang.value == "") {
    lg = navigator.language;
  } else lg = lang.value;

  weekday = weekday.value ?? "";
  year = year.value ?? "";
  month = month.value ?? "";
  day = day.value ?? "";
  hour = hour.value ?? "";
  minute = minute.value ?? "";
  second = second.value ?? "";
  timeZoneName = timeZoneName.value ?? "";
  era = era.value ?? "";

  let ops = new Map();
  if (weekday) ops.set("weekday", weekday);
  if (year) ops.set("year", year);
  if (month) ops.set("month", month);
  if (day) ops.set("day", day);
  if (hour) ops.set("hour", hour);
  if (minute) ops.set("minute", minute);
  if (second) ops.set("second", second);
  if (timeZoneName) ops.set("timeZoneName", timeZoneName);
  if (era) ops.set("ear", era);

  const obj = Object.fromEntries(ops);

  let x = glide2Date(date.value, "short");
  let conv = x.toLocaleString(lg, obj);

  return conv;
};
