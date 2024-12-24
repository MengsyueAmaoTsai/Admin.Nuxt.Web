export enum DataGridResizeType {
	Discrete = "discrete",
	exact = "exact",
}

export enum GenerateHeaderOption {
	None = "none",
	Default = "default",
	Sticky = "sticky",
}

export enum DataGridRowSize {
	Small = 32,
	Medium = 44,
	Smaller = 24,
	Large = 58,
}

export enum DataGridRowType {
	Default = "default",
	Header = "header",
	StickyHeader = "stickyHeader",
}

export enum DataGridCellType {
	Default = "default",
	ColumnHeader = "columnHeader",
	RowHeader = "rowHeader",
}

export enum Align {
	Start = "flex-start",
	Center = "center",
	End = "flex-end",
	Stretch = "stretch",
	Baseline = "baseline",
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

export enum Orientation {
	Horizontal = "horizontal",
	Vertical = "vertical",
}

export enum ProgressStroke {
	Small = "small",
	Normal = "normal",
	Large = "large",
}

export enum SortDirection {
	Auto = "auto",
	Ascending = "asc",
	Descending = "desc",
}

export enum ButtonType {
	Button = "button",
	Submit = "submit",
	Reset = "reset",
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

export enum Typography
{
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
