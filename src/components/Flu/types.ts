export enum Orientation {
	Vertical = "vertical",
	Horizontal = "horizontal",
}

export enum SortDirection {
	Auto = "auto",
	Ascending = "ascending",
	Descending = "descending",

}

export enum Align {
	Start = 'flex-start',
	Center = 'center',
	End = 'flex-end',
	Stretch = 'stretch',
	Baseline = 'baseline',
}

export enum HorizontalAlignment {
	Left = "left",
	Start = "start",
	Center = "center",
	Right = "right",
	End = "end",
	Stretch = "stretch",
}

export enum VerticalAlignment {
	Top = "top",
	Center = "center",
	Bottom = "bottom",
}

export enum Appearance {
	Neutral = "neutral",
	Accent = "accent",
	Hypertext = "hypertext",
	Lightweight = "lightweight",
	Outline = "outline",
	Stealth = "stealth",
	Filled = "filled",
}

export enum InputAppearance {
	Filled = "filled",
	Outline = "outline",
}

export enum ButtonType {
	Button = "button",
	Submit = "submit",
	Reset = "reset",
}

export enum TextFieldType {
	Text = "text",
	Email = "email",
	Password = "password",
	Tel = "tel",
	Url = "url",
	Color = "color",
	Search = "search",
	Number = "number",
}

export enum InputMode {
	None = "none",
	Text = "text",
	Decimal = "decimal",
	Numeric = "numeric",
	Telephone = "tel",
	Search = "search",
	Email = "email",
	URL = "url",
}

export enum DataGridSelectMode {
	Single = "single",
	Multiple = "multiple",
}

export enum DataGridResizeType {
	Discrete = "discrete",
	Exact = "exact"
}

export enum GenerateHeaderOption{
	None = "none",
	Default = "default",
	Sticky = "sticky"
}

export enum DataGridRowSize {
	Small = 32,
	Medium = 44,
	Smaller = 24,
	Large = 58
}

export enum DataGridRowType {
	Default = "default",
	Header = "header",
	StickyHeader = "sticky-header",
}

export enum DataGridCellType{
	Default = "default",
	ColumnHeader = "columnheader",
	RowHeader = "rowheader",
}

export enum ProgressStroke {
	Small = 'small',
	Normal = 'normal',
	Large = 'large',
}

export enum Typography{
	Body = 'body',
	Subject = 'subject',
	Header = 'header',
	PaneHeader = 'pane-header',
	EmailHeader = 'email-header',
	PageTitle = 'page-title',
	HeroTitle = 'hero-title',
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
}

export enum FontWeight {
	Normal = 'normal',
	Bold = 'bold',
	Bolder = 'bolder',
}

export enum Color {
	Neutral = 'var(--neutral-foreground-rest)',
	Accent = 'var(--accent-fill-rest)',
	Warning = 'var(--warning)',
	Info = 'var(--info)',
	Error = 'var(--error)',
	Success = 'var(--success)',
	Fill = 'var(--neutral-fill-rest)',
	FillInverse = 'var(--neutral-fill-inverse-rest)',
	Lightweight = 'var(--neutral-layer-1)',
	Disabled = 'var(--neutral-stroke-rest)',
	Custom = 'var(--neutral-foreground-rest)'
}