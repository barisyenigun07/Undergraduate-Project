package com.undergraduate.server.util;

import com.undergraduate.server.exception.NotAnImageException;
import org.apache.http.entity.ContentType;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ImageUtil {
    public static void isImage(MultipartFile file){
        if (!Arrays.asList(ContentType.IMAGE_PNG.getMimeType(), ContentType.IMAGE_JPEG.getMimeType()).contains(file.getContentType())){
            throw new NotAnImageException();
        }
    }

    public static Map<String, String> extractMetadata(MultipartFile file){
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        return metadata;
    }

    public static String[] convertListToArray(String prefix, List<String> urls){
        String[] arr = new String[urls.size()];
        for (int i = 0;i < arr.length; i++){
            arr[i] = String.format("%s/%s", prefix, urls.get(i));
        }
        return arr;
    }
}
