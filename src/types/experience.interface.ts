export interface Experience {
  work_time?:   string;
  id?:          string;
  description?: string;
  position?:    string;
  date_end?:    DateEndClass;
  date_start?:  DateEndClass;
  company?:     string;
}

export interface DateEndClass {
  seconds?:     number;
  nanoseconds?: number;
}
