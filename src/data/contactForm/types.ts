export type FieldType = "text" | "email" | "select" | "textarea" | "checkbox";

export interface FieldOption {
  value: string;
  label: { ko: string; en: string };
}

export interface FormFieldDef {
  id: string;
  type: FieldType;
  required: boolean;
  label: { ko: string; en: string };
  placeholder?: { ko: string; en: string };
  options?: FieldOption[];
}

export type TemplateSegment =
  | { kind: "text"; value: string }
  | { kind: "field"; id: string };

export type TemplateLine = TemplateSegment[];

export interface ContactContent {
  header: {
    title: { ko: string; en: string };
    description: { ko: string[]; en: string[] };
  };
  submit: { ko: string; en: string };
  fields: FormFieldDef[];
  template: { ko: TemplateLine[]; en: TemplateLine[] };
}
