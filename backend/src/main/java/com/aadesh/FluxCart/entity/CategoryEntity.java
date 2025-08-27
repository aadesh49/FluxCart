package com.aadesh.FluxCart.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name="tbl_category")
@Builder
@Data
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String categoryId;
    @Column(unique = true)
    private String name;
    private String description;
    private String url;
    private String bgColor;
    @CreationTimestamp
    @Column(updatable = false)                  //this will avoid updating the createdAt value even if we update the table value
    private Timestamp createdAt;
    @UpdateTimestamp                            //this will be triggered whenever we do any change in this table
    private Timestamp updatedAt;
}
