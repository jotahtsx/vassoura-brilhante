package br.com.jotahdev.backend.core.models;

import br.com.jotahdev.backend.core.enums.Icon;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
public class Service {

    @EqualsAndHashCode.Include
    @ToString.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(name = "minimum_value", nullable = false)
    private BigDecimal minimumValue;

    @Column(name = "hours_quantity", nullable = false)
    private Integer hoursQuantity;

    @Column(name = "commission_percentage", nullable = false)
    private BigDecimal commissionPercentage;

    @Column(name = "hours_per_room", nullable = false)
    private Integer hoursPerRoom;

    @Column(name = "value_per_room", nullable = false)
    private BigDecimal valuePerRoom;
    
    @Column(name = "hours_per_hall", nullable = false)
    private Integer hoursPerHall;

    @Column(name = "value_per_hall", nullable = false)
    private BigDecimal valuePerHall;

    @Column(name = "hours_per_bathroom", nullable = false)
    private Integer hoursPerBathroom;

    @Column(name = "value_per_bathroom", nullable = false)
    private BigDecimal valuePerBathroom;

    @Column(name = "hours_per_kitchen", nullable = false)
    private Integer hoursPerKitchen;

    @Column(name = "value_per_kitchen", nullable = false)
    private BigDecimal valuePerKitchen;

    @Column(name = "hours_per_backyard", nullable = false)
    private Integer hoursPerBackyard;

    @Column(name = "value_per_backyard", nullable = false)
    private BigDecimal valuePerBackyard;

    @Column(name = "hours_per_others", nullable = false)
    private Integer hoursPerOthers;

    @Column(name = "value_per_others", nullable = false)
    private BigDecimal valuePerOthers;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Icon icon;

    @Column(nullable = false)
    private Integer position;
}
