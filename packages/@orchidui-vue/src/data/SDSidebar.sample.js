const SDSidebar = [
    {
        name: "home",
        label: "Home Settings",
        children: [
            {
                name: "header",
                label: "Header"
            },
            {
                name: "sections",
                label: "Sections",
            },
            {
                name: "footer",
                label: "Footer"
            }
        ]
    },
    {
        name: "home",
        label: "Styles",
        children: [
            {
                name: "header"
            },
            {
                name: "sections"
            },
            {
                name: "footer"
            }
        ]
    }
]

const Sections = [
    {
        preview: "/images/section_preview.jpg",
        name: "section_name",
        label: "Section Label",
        type: "form_request"
    },
    {
        preview: "/images/section_preview.jpg",
        name: "section_name_2",
        label: "Section Label 2",
        type: "form_request"
    }
]

const AvailableSections = [
    {
        preview: "/images/section_preview.jpg",
        name: "new_section_name",
        label: "New Section Label",
        type: "form_request"
    },
    {
        preview: "/images/section_preview.jpg",
        name: "new_section_name_2",
        label: "New Section Label 2",
        type: "form_request"
    }
]

const formRequestTypes = [
    "text",
    "longText",
    "options",
    "toggle",
    "select",
    "select_category",
    "select_products",
]
const RequestFormSection = [
    {
        type: "options",
        name: "variant",
        label: "Type",
        options: [
            {
                preview: "images/setting_preview.jpg",
                value: "carousel",
                label: "Carousel"
            },
            {
                preview: "images/setting_preview.jpg",
                value: "grid",
                label: "Grid"
            }
        ]
    },
    {
        type: "title",
        label: "Content"
    },
    {
        type: "text",
        name: "limit",
        label: "Limit feature products",
        hint: "How many featured products do you want to show?",
    },
    {
        name: "description",
        type: "longText",
        label: "Description",
    },
    {
        type: "toggle",
        name: "show_filter",
        label: "Show Categories Filter",
    },
    {
        type: "select",
        name: "product_from",
        label: "Select Product from",
        options: [
            {
                value: "all",
                label: "All Products"
            },
            {
                value: "feature",
                label: "Feature Product"
            },
            {
                value: "category",
                label: "Product Category"
            },
            {
                value: "pick_products",
                label: "Pick Products"
            },
        ]
    },
]

export { 
    SDSidebar,
    Sections,
    AvailableSections,
    formRequestTypes,
    RequestFormSection
}