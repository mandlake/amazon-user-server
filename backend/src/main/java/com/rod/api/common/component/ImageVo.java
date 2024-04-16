package com.rod.api.common.component;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImageVo {
    private long imageId;
    String name;
    Long lastModified;
    Long lastModifiedDate;
    String type;
    String webkitRelativePath;
    Long size;
}
