package br.com.jotahdev.backend.core.enums;

public enum Icon {
    VSB_CLEANING_1("vsb-cleaning-1"),
    VSB_CLEANING_2("vsb-cleaning-2"),
    VSB_CLEANING_3("vsb-cleaning-3");

    private String name;

    private Icon(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
